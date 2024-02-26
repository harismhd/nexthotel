// import { GetStaticPaths, GetStaticProps } from "next";
// import Head from "next/head";
// import { FC } from "react";
// import { getAllEmployeesData, getEmployeeData } from "../../utils/Employees";

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await getAllEmployeesData();

//   const paths = res.map((employee: { id: number }) => ({
//     params: { id: employee.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const res = await getEmployeeData(params?.id);

//   return {
//     props: {
//       employee: res,
//     },
//   };
// };

// interface Props {
//   employee: {
//     name: string;
//     email: string;
//     website: string;
//     address: {
//       city: string;
//     };
//   };
// }

// const Details: FC<Props> = ({ employee }) => {
//   return (
//     <>
//       <Head>
//         <title>Employee List | {employee.name}</title>
//         <meta name="keywords" content="employees" />
//       </Head>

//       <div>
//         <h1 className="pb-5">{employee.name}</h1>
//         <p>{`Email: ${employee.email}`}</p>
//         <p>
//           Website:{" "}
//           <a
//             href={"http://" + employee.website}
//             target="_blank"
//             rel="noreferrer"
//             className="text-blue-500 hover:text-blue-700"
//           >
//             {employee.website}
//           </a>
//         </p>
//         <p>{`Adress: ${employee.address.city}`}</p>
//       </div>
//     </>
//   );
// };

// export default Details;

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { supabase } from "../../utils/employees";

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await supabase.from("hotels").select("id");

  if (error) {
    console.error("Error fetching paths:", error.message);
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = data.map((employee: { id: number }) => ({
    params: { id: employee.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const { data, error } = await supabase
    .from("hotels")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(`Error fetching employee with id ${id}:`, error.message);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      employee: data,
    },
  };
};

interface Props {
  employee: {
    title: string;
    description: string;
    image: string;
    text: string;
    locartion: string;
    cuisine: string;
  };
}

const Details: FC<Props> = ({ employee }) => {
  return (
    <>
      <Head>
        <title>Employee List | {employee.title}</title>
        <meta name="keywords" content="employees" />
      </Head>

      <div>
        <h1 className="pb-5">{employee.description}</h1>
        <div>{` ${employee.image}`} </div>
        <p>{`${employee.ema}`}</p>
        <p>{`Email: ${employee.email}`}</p>
        <p>{`Email: ${employee.email}`}</p>

        <p>{`Adress: ${employee.address.city}`}</p>
      </div>
    </>
  );
};

export default Details;
