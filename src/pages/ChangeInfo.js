import React from "react";
import styled from "styled-components";

function ChangeInfo() {
  return (
    <MainDiv>
      <HeaderDiv></HeaderDiv>
      <ContentDiv>
        <a href="#">&#60; Back</a>
        <ContentCard>
          <CardTitleDiv>
            <h2>Change Info</h2>
            <p>Changes will be reflected to every services</p>
          </CardTitleDiv>
          <ImageDiv>
            <img src="#" alt="profile"></img>
            <p>CHANGE PHOTO</p>
          </ImageDiv>
          <InputDiv>
            <p>Name</p>
            <input placeholder="Enter your name..."></input>
          </InputDiv>
          <InputDiv>
            <p>Bio</p>
            <textarea placeholder="Enter your bio..."></textarea>
          </InputDiv>
          <InputDiv>
            <p>Phone</p>
            <input placeholder="Enter your phone..."></input>
          </InputDiv>
          <InputDiv>
            <p>Email</p>
            <input placeholder="Enter your email..."></input>
          </InputDiv>
          <InputDiv>
            <p>Password</p>
            <input placeholder="Enter your password..."></input>
          </InputDiv>
          <Button>Save</Button>
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

const HeaderDiv = styled.div``;

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

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.035em;
    color: #828282;
  }
`;

