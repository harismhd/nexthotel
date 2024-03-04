import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import styles from "../../styles/list.module.css";
import { getAllEmployeesData, getEmployeeData } from "../../utils/Employees";

interface Props {
  employee: {
    title: string;
    description: string;
    image: string;
    location: string;
    text: string;
    cuisine: string;
  };
}

const Details: FC<Props> = ({ employee }) => {
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
