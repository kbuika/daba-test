import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../layout/Header";
import Steve from "../resources/images/steve.jpg";
import {useNavigate} from "react-router-dom"

function PersonalInfo() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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
      }
    }`,
      variables: {email:email}
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:5000/graphql/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log((response.data.data.user.name));
      setData(response.data.data.user);
    })
    .catch(function (error) {
      setError(error);
    });
    
  }, [email]);

  const changeDetails = (e) => {
    e.preventDefault();
    navigate(`/change-info/${data.id}`);
  }
  return (
    <MainDiv>
      <HeaderDiv>
        <Header />
      </HeaderDiv>
      <ContentDiv>
        <h2>Personal info</h2>
        <p>Basic info, like your name and photo</p>
        <ContentCard>
          <section>
            <div>
              <h3>Profile</h3>
              <p>Some info may be visible to other people</p>
            </div>
            <button onClick={changeDetails}>Edit</button>
          </section>
          <ContactItem>
            <h3>PHOTO</h3>
            <img src={data?.avatar || Steve} alt="profile"></img>
          </ContactItem>
          <ContactItem>
            <h3>NAME</h3>
            <p>{data?.name || '-'}</p>
          </ContactItem>
          <ContactItem>
            <h3>BIO</h3>
            <p>{data?.bio}...</p>
          </ContactItem>
          <ContactItem>
            <h3>PHONE</h3>
            <p>{data?.phone || '-'}</p>
          </ContactItem>
          <ContactItem>
            <h3>EMAIL</h3>
            <p>{data?.email || '-'}</p>
          </ContactItem>
          <ContactItem>
            <h3>Password</h3>
            <p>************</p>
          </ContactItem>
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

export default PersonalInfo;

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

  > h2 {
    font-weight: 400;
    font-size: 29px;
    line-height: 49px;
    letter-spacing: -0.035em;
    color: #000000;
  }

  > p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.035em;
    color: #000000;
    margin-top: 8px;
  }
`;

const ContentCard = styled.div`
  width: 846px;
  height: auto;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 44px;

  > section {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 29px 48px;

    @media (max-width: 768px) {
      padding: 10px 28px;
    }

    > div {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: center;

      > h3 {
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

        @media (max-width: 768px) {
          width: 170px;
          text-align: left;
        }
      }
    }

    > button {
      height: 38px;
      width: 95.3px;
      blend: pass through;
      border: 1px solid #828282;
      border-radius: 12px;
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
    border: none;
  }
`;

const ContactItem = styled.div`
  width: 100%;
  padding: 29px 48px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid #d3d3d3;

  > h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #bdbdbd;
    margin-right: 208px;

    @media (max-width: 768px) {
      margin-right: 50px;
    }
  }

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.035em;
    color: #333333;

    @media (max-width: 768px) {
      align-self: flex-end;
      text-align: right;
    }
  }

  > img {
    height: 72px;
    width: 72px;
    border-radius: 8px;
    border: none;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 19px 28px;
    border-top: none;
    border-bottom: 1px solid #d3d3d3;
    justify-content: space-between;
  }
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
    width: 90vw;
    margin-top: 19px;
    align-self: center;
    margin-bottom: 17px;
  }
`;
