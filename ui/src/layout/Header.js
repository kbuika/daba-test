/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import DevLogo from "../resources/logos/devchallenges.svg";
import Steve from "../resources/images/steve.jpg";
import GroupIcon from "../resources/icons/group.svg";
import AvatarIcon from "../resources/icons/account.svg";
import LogoutIcon from "../resources/icons/logout.svg";
import styled from "styled-components";
import axios from "axios";

export default function Header() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
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
  return (
    <Popover className="fixed bg-white z-10 w-screen mb-20 px-4 md:px-16 md:mb-40">
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <p className="sr-only">Dev challenges</p>
                <object data={DevLogo} aria-label="dev logo" />
              </a>
            </div>
            <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
              <Menu as="div" className="ml-3 relative">
                {({ open }) => (
                  <>
                    <div className="flex row items-center justify-center">
                      <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          src={data?.avatar || Steve}
                          alt="user avatar"
                          style={{ objectFit: "cover" }}
                        />
                      </Menu.Button>
                      <ImageTag className="ml-4">{data?.name || '-'}</ImageTag>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md py-1 bg-white ring-1 ring-black ring-opacity-0"
                      >
                        <Menu.Item className="flex flex-col items-center justify-center p-4 w-full">
                          {({ active }) => (
                            <PopUpDiv>
                              <PopUpItem>
                                <img src={AvatarIcon} alt="profile"></img>
                                <p>My Profile</p>
                              </PopUpItem>
                              <PopUpItem>
                                <img src={GroupIcon} alt="profile"></img>
                                <p>Group Chat</p>
                              </PopUpItem>
                              <div style={{height: '2px', width: '100%', backgroundColor: '#E0E0E0'}}></div>
                              <PopUpItem>
                                <img
                                  src={LogoutIcon}
                                  alt="profile"
                                  style={{ color: "red" }}
                                ></img>
                                <p style={{color: 'red'}}>Logout</p>
                              </PopUpItem>
                            </PopUpDiv>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>
      </>
    </Popover>
  );
}

const Image = styled.img`
  height: 36.7px;
  width: 32px;
  blend: pass through;
  border-radius: 4px;
`;

const ImageTag = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.035em;
  color: #333333;
  cursor: pointer;
`;

const PopUpDiv = styled.div`
  height: 174px;
  width: 188px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const PopUpItem = styled.div`
  height: 39.1px;
  width: 164.12px;
  border-radius: 8px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  margin: 2.94px 0;
  padding: 11.34px 13px;
  cursor: pointer;

  &:hover {
    background: #F2F2F2;
  }

  > img {
    height: 19.67px;
    width: 19.67px;
  }

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
    margin-left: 12px;
  }
`;
