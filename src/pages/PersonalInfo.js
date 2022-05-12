import React from "react";
import styled from "styled-components";

function PersonalInfo() {
  return (
    <MainDiv>
      <HeaderDiv>
        <ContentDiv>
          <h2>Personal Info</h2>
          <p>Basic info, like your name and photo</p>
          <ContentCard>
            <section>
              <div>
                <h3>Profile</h3>
                <p>Some info may be visible to other people</p>
              </div>
              <button>Edit</button>
            </section>
            <ContactItem>
              <h3>PHOTO</h3>
              <img src="#" alt="profile"></img>
            </ContactItem>
            <ContactItem>
              <h3>NAME</h3>
              <p>Xanthe Neal</p>
            </ContactItem>
            <ContactItem>
              <h3>BIO</h3>
              <p>I am a software developer and a big fan of devchallenges...</p>
            </ContactItem>
            <ContactItem>
              <h3>PHONE</h3>
              <p>9379237492184</p>
            </ContactItem>
            <ContactItem>
              <h3>EMAIL</h3>
              <p>xanthe.neal@gmail.com</p>
            </ContactItem>
            <ContactItem>
              <h3>PHOTO</h3>
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
      </HeaderDiv>
    </MainDiv>
  );
}

export default PersonalInfo;

const MainDiv = styled.div``;

const HeaderDiv = styled.div``;

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
  }

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.035em;
    color: #333333;
  }

  > img {
    height: 72px;
    width: 72px;
    border-radius: 8px;
    border: none;
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

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.035em;
    color: #828282;
  }
`;
