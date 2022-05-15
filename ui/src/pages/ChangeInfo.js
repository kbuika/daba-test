import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ChangeInfo() {
  const [data, setData] = useState(null);
  const [details, setDetails] = useState({
    name: "",
    bio: "",
    phone: "",
    email: "",
    avatar: "",
    password: "",
  });
  const [, setError] = useState(null);
  const navigate = useNavigate();
  let userId = useParams().id;
  let email = localStorage.getItem("email");

  useEffect(() => {
    var data = JSON.stringify({
      query: `query($email: String!){
      user(email: $email) {
        id
        name
        avatar
        bio
        phone
        email
        password
      }
    }`,
      variables: { email: email },
    });

    var config = {
      method: "post",
      url: process.env.REACT_APP_API_URL + "/graphql/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data.user.name);
        setData(response.data.data.user);
        let res = response.data.data.user;
        setDetails({name: res.name, email: res.email, phone: res.phone, bio: res.bio, password: res.password, avatar: res.avatar});
      })
      .catch(function (error) {
        setError(error);
      });
  }, [email]);

  const updateDetails = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      query: `mutation($email: String!, $name: String!,$id: ID!,$phone: String!,$bio: String!,$avatar: String!,){
      updateUser(email: $email, name: $name, id: $id, phone: $phone, bio: $bio) {
        name
        id
        email
        phone
        bio
      }
    }`,
      variables: {
        email: details?.email,
        name: details.name,
        id: userId,
        phone: details.phone,
        bio: details.bio,
      },
    });

    var config = {
      method: "post",
      url: process.env.REACT_APP_API_URL + "/graphql/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      navigate("/personal-info");
  };

  const onChange = (e) => {
    setDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <MainDiv>
      <HeaderDiv>
        <Header />
      </HeaderDiv>
      <ContentDiv>
        <a href="/personal-info">&#60; Back</a>
        <ContentCard>
          <CardTitleDiv>
            <h2>Change Info</h2>
            <p>Changes will be reflected to every services</p>
          </CardTitleDiv>
          <ImageDiv>
            <img src={data?.avatar} alt="profile"></img>
            <p>CHANGE PHOTO</p>
          </ImageDiv>
          <InputDiv>
            <p>Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              onChange={onChange}
              value={details.name}
            ></input>
          </InputDiv>
          <InputDiv>
            <p>Bio</p>
            <textarea type="text" name="bio" placeholder="Enter your bio..." value={details?.bio} onChange={onChange}></textarea>
          </InputDiv>
          <InputDiv>
            <p>Phone</p>
            <input type="text" name="phone" placeholder="Enter your phone..." value={details?.phone} onChange={onChange}></input>
          </InputDiv>
          <InputDiv>
            <p>Email</p>
            <input type="email" name="email" placeholder="Enter your email..." value={details?.email} disabled={true}></input>
          </InputDiv>
          <InputDiv>
            <p>Password</p>
            <input type="password" name="password" placeholder="Enter your password...(disabled)" disabled={true} value={details?.password}></input>
          </InputDiv>
          <Button onClick={updateDetails}>Save</Button>
        </ContentCard>
        <BottomTextDiv>
          <p>
            created by <u>username</u>
          </p>
          <p>devChallenges.io</p>
        </BottomTextDiv>
      </ContentDiv>
    </MainDiv>
  );
}

export default ChangeInfo;

const MainDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const HeaderDiv = styled.div`
  width: 100%;
  margin-bottom: 125px;

  @media (max-width: 768px) {
    margin-bottom: 97px;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 846px;

  > a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.035em;
    color: #2d9cdb;
    align-self: flex-start;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      margin-bottom: 4px;
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
    padding: 0 28px;
  }
`;

const ContentCard = styled.div`
  height: 828px;
  width: 846px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 31px 49px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
    border: none;
    padding: 17px 28px;
  }
`;

const CardTitleDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  > h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.035em;
    color: #000000;
  }

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #828282;
    margin-top: 4px;
  }
`;

const ImageDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 26px;
  margin-bottom: 32px;

  > img {
    height: 72px;
    width: 72px;
    border-radius: 8px;
    blend: pass through;
    background: rgba(0, 0, 0, 0.2);
    object-fit: cover;
  }

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #828282;
    margin-left: 28px;
  }
`;

const InputDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 24px;

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
  }

  > input {
    height: 52px;
    width: 417px;
    border: 1px solid #828282;
    border-radius: 12px;
    margin-top: 3.83px;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #bdbdbd;
    padding: 17px 18px;

    @media (max-width: 768px) {
      width: 300px;
    }
  }

  > textarea {
    height: 91.6px;
    width: 417px;
    border-radius: 12px;
    border: 1px solid #828282;
    margin-top: 3.83px;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #bdbdbd;
    padding: 17px 18px;

    @media (max-width: 768px) {
      width: 300px;
    }
  }
`;

const Button = styled.button`
  height: 38px;
  width: 82px;
  border-radius: 8px;
  background: #2f80ed;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.035em;
  color: #ffffff;
  align-self: flex-start;
`;

const BottomTextDiv = styled.div`
  width: 846px;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 12.25px;
  margin-bottom: 71px;

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.035em;
    color: #828282;
  }

  @media (max-width: 768px) {
    width: 82vw;
    margin-top: 19px;
    align-self: center;
    margin-bottom: 17px;
  }
`;
