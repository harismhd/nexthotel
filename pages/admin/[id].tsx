import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/list.module.css";
import {
  getAllEmployeesData,
  getEmployeeData,
  deleteEmployee,
} from "../../utils/Employees";

interface Props {
  employee: {
    id: number;
    title: string;
    description: string;
    image: string;
    location: string;
    text: string;
    cuisine: string;
  };
}

const Details: FC<Props> = ({ employee }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteEmployee(employee.id);
      router.push("/admin"); // Redirect to admin/index page after deletion
    } catch (error) {
      // console.error("Error deleting employee:", error.message);
    }
  };
  return (
    <>
      <Head>
        <title>Restaurant List </title>
        <meta name="keywords" content="restaurant" />
      </Head>

      <div className={styles.details}>
        <h1 className="pb-5">{employee.title}</h1>
        <img
          src={employee.image}
          alt={employee.title}
          className="image mx-auto"
        />
        <p>{employee.description}</p>
        <p>{`cusine: ${employee.cuisine}`}</p>
        <p>{employee.text}</p>
        <p>{`location: ${employee.location}`}</p>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getAllEmployeesData();

  const paths = res
    ? res.map((employee: any) => ({
        params: { id: employee.id.toString() },
      }))
    : [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await getEmployeeData(params?.id as string);

  return {
    props: {
      employee: res,
    },
  };
};
