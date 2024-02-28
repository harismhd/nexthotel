// import { GetStaticProps } from "next";
// import { FC } from "react";
// import { getAllEmployeesData } from "../../utils/Employees";

// // Styles
// import styles from "../../styles/Employees.module.css";
// import Head from "next/head";
// import Link from "next/link";

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await getAllEmployeesData();

//   return {
//     props: {
//       employees: res,
//     },
//   };
// };

// interface Props {
//   employees: {
//     id: number;
//     name: string;
//     email: string;
//   }[];
// }

// const Employee: FC<Props> = ({ employees }) => {
//   return (
//     <>
//       <Head>
//         <title>Employee List | Employee</title>
//         <meta name="keywords" content="employees" />
//       </Head>

//       <div>
//         <h1 className={styles.title}>All Employee</h1>

//         {employees.map((employee) => (
//           <Link key={employee.id} href={`/employee/${employee.id}`}>
//             <a className={styles.single}>
//               <h3 className="font-bold text-xl">{employee.name}</h3>
//               <p>{employee.email}</p>
//             </a>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Employee;

import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { getAllEmployeesData } from "../../utils/Employees";
import styles from "../../styles/Employees.module.css";
import Link from "next/link";

interface Employee {
  id: number;
  title: string;
  cuisine: string;
  location: string;
  image: string;
}

interface Props {
  employees: Employee[];
}

const EmployeeList: FC<Props> = ({ employees }) => {
  return (
    <>
      <Head>
        <title>Employee List</title>
        <meta name="keywords" content="employees" />
      </Head>

      <div>
        <h1 className={styles.title}>TOP 10 RESTAURANTS IN CALICUT</h1>

        {employees.map((employee) => (
          <Link key={employee.id} href={`/employee/${employee.id}`}>
            <a className={styles.single}>
              <h3 className="font-bold text-xl">{employee.title}</h3>
              <p>{employee.location}</p>
              <p>{employee.cuisine}</p>
              <img src={employee.image} alt={employee.title} />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const employees = await getAllEmployeesData();

  return {
    props: {
      employees: employees || [],
    },
  };
};

export default EmployeeList;
