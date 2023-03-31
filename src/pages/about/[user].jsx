import React from "react";
import About from ".";

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          user: 'lucas'
        }
      },
      {
        params: {
          user: 'suelen'
        }
      },
      {
        params: {
          user: 'joao'
        }
      }
    ],
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const user = context.params.user;

  return {
    props: {
      user: user,
    }
  }
}

const User = ({ user }) => {
  return (
    <>
      <div>{user}</div>
      <About />
    </>
  )
}

export default User;