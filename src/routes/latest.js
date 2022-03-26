import Footer from "components/common/footer";
import Header from "components/common/header";
import React from "react";
import styled from "styled-components";
import MainView from "components/common/mainview";
import Top10 from "components/common/top10";
import New from "components/common/new";
import ThisWeek from "components/common/thisweek";

const LatestStyle = styled.div`
  background-color: #141414;
  color: white;
`;

export default function Latest() {
  const wishlist = [
    {
      title: "아미 오브 더 데드",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZEP4AZw6lw_taxpHYBfL1t1-QHHAnJbxuvBEP5MmJ5pfoyxjdpYklTz594Ig4MLoeCA8lxZ8Oy9CkGXqZJW08qy3z-gaEXK9sUP8R7ozn-lkLF0quqB77lgo2fg.jpg?r=303`,
    },
    {
      title: "엘리트들, 못다 한 이야기: 나디아 구스만",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT9B7KtXO0mMGY6bA_1agFciZbjZ0W3B_HB3OlDXUchO6FoTH74qwrAr_eelH0B-Jo1bDVQoA2eS3gyNo3cr0VRhaVIsxY-Y_TwAkPkKFnCBecxTXwecGcjV8oeK.jpg?r=272`,
    },
    {
      title: "에밀리, 파리에 가다",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABenpESyzqEbLYaGkba-hFdNBspKl0QFik5OYBNItTB9TUcrRw8a9QbLG9z-0hCU512Cv5xZElCEZE8GGUqLliqjBeiUpTBmSX2jp931QlHI1owGA8iqeYpKwX3gu.jpg?r=c29`,
    },
    {
      title: "오티스의 비밀 상담소",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ_h6lCxU5PbPE5W2Ojbpg-yyOYaCfZCI8BjJFlPcrfMA4LqQOasPHeBn6mJXmDX95N5UgOlIhxdF2ABc2YNmSzKbRneP3hdxbh-Qsgy3GEcBvjDcokmXXb6Iafs.jpg?r=a02`,
    },
    {
      title: "어둠 속으로",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdnD2-heSKbg2nyoa8kPZXsnkArx5qxHzbZcTybmkulDq6VWcfFixEkfeju3IxbMSM8WmP5u6JE_1bB9yrs9WKKBGE0ufZge9wt8oQbuRYowZ04_ZTybRGccYe5n.jpg?r=839`,
    },
    {
      title: "엘리트들, 못다 한 이야기: 카를라 사무엘",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQnwI7tfAQ5x02blm5Q5dLINSNEWZWN8XxZhvRyZdCYZ9HBw_tcwaEXV7cUpyn9x-voZAiKGZyEY2KGvTcIn_6Lva2ULbxbHIXLyqZu7MmK5lGia4xt6UgzaIRAx.jpg?r=9bb`,
    },
    {
      title: "레드 노티스",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABebnfR5lGksCGNJTqZbBMb6wp8ZSEak3ACv-uyEcRbRXGIvthtyAQ12cp8Vwkz-yeyWZls4X7kvuOPlIFMMsxVTzoVCCIKq6VG49a97EkstWAcCZfe0VteAVB3d7.jpg?r=83`,
    },
    {
      title: "지정생존자",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTI6WPjtjeM3Y2TC2koxiuz5iqJ5A-u7DIrjaFjLAQ0M7NrXm8PH_kIYJDYMoc2dM_SlXeszlBbu1yZwRVZyyVscutXKZXo85kptZjjSGFzlzTYhf1uoAR5NyzrS.jpg?r=529`,
    },
  ];

  const waiting = [
    {
      title: "야차",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbO_g2NEPHLEeWGOjXVMxj8Llqqb2b2H1VxMiK6qnZBFQrxeZDX5rUhR0CSHffBKehHFslWYUHM2Drp1fvGuMk_PT-CjebmsVbU24LQ3NZ04wHYNRSmxSlrHqii6.jpg?r=774`,
    },
    {
      title: "엘리트들",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd6-aB1M8ufSgNEY8d9vObe0eEnxWwU44vOVc_vqwH301GqKIk-u7rYHIwhQf6Ydmr_hGOwT3NsP7jiXIwaciR4HCg0dAt-HlnnbDEsmDnwQXwUqTUlUDXQnq018.jpg?r=48e`,
    },
    {
      title: "인비트윈",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfDFGrJl3TW0U1Z_Og97FIEnBFPmrA3qGsjXEg1P6jjya2BrroZYWmgPBpNpvqg79HSpiwgTGfCwv4bOC-Bg4xhlGZY7c5tUxJ4PsYExoSW-kCMdvFXNSRrmxkhY.jpg?r=810`,
    },
    {
      title: "오자크",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeNAdOWMOLXLh9wG5p2EJojuQNvH63ur-3gAnRJXZjocJBkhMB9nOrYFO_dBiJwl0VJo3bW7Aje-cnHg-ZbaltT2KXgCLBamqobENtTVy8FW6Gyxx3prJA-VGkAf.jpg?r=61c`,
    },
    {
      title: "기묘한 이야기",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRHsBrdakL0PxNTUzwocBAx96wvFBF4_Wrz_uOYDUGcuci8IeMYfpscY2ZTEKF2Vwg73E9byAqO8AfxPIsy-lt01Fqpyvginccgex43vBWPORhg9bKTXnAJSq0Pm.jpg?r=600`,
    },
    {
      title: "땅의 상속자들",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW3HjoP7i0dwo-rs22fmwMHnIEPZMEQ_0rjiy4l_jowQFuTMCUdG0Vs9WvKdciBlCCeriu83ZLt_lSB98sliJuZraKkXmmFv2Hdwbiv5LGeJUOP6TuGCXi4uIDu5.jpg?r=c14`,
    },
    {
      title: "메탈 로드",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaFDHnmrW5ipzw0lfo5FGk_ZtflLkpgkB_bkT4ksD3zZmzxUFr6sxGpAsqT3QGIHajY3O7Ib1bkzwfVDr9gkD3O-U5jHwTL-lOerpL1dS9G9n50R-ZUUcXfHQYHF.jpg?r=e2c`,
    },
    {
      title: "아나토미 오브 스캔들",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVhEzSVBkriJYZXR9iYzue4N81kOK6ohf7YatbcyjafvoSWxhs4YbBxcm9EYjlKYylzms_mShOTsKDKzFaEKBIpxpbfrCrbFW-N-_SBnOSkU4YrZBEm43_vZSsbf.jpg?r=9ba`,
    },
  ];

  return (
    <LatestStyle>
      <Header fixed />
      {/* <MainView top10 thisWeek wishlist={wishlist} waiting={waiting} /> */}
      <Top10 />
      <New />
      <ThisWeek />
      <Footer center home />
    </LatestStyle>
  );
}
