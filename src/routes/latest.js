import Footer from "components/common/footer";
import Header from "components/common/header";
import React from "react";
import styled from "styled-components";
import { ReactComponent as Rank1 } from "images/rank-1.svg";
import { ReactComponent as Rank2 } from "images/rank-2.svg";
import { ReactComponent as Rank3 } from "images/rank-3.svg";
import { ReactComponent as Rank4 } from "images/rank-4.svg";
import { ReactComponent as Rank5 } from "images/rank-5.svg";
import { ReactComponent as Rank6 } from "images/rank-6.svg";
import { ReactComponent as Rank7 } from "images/rank-7.svg";
import { ReactComponent as Rank8 } from "images/rank-8.svg";
import { ReactComponent as Rank9 } from "images/rank-9.svg";
import { ReactComponent as Rank10 } from "images/rank-10.svg";
import MainView from "components/common/mainview";

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

  const top10 = [
    {
      title: "스물다섯 스물하나",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQCHVIGrFxsv9XkRdIDl85X6Z_eJ7P4S6wAsLVSY5s8uK6k37_OBrVZiKnAgTuo-k9zSZ3lf1MP5RDVPUetoQlt-V6wYVnTbv6dAo98QqbwusF_5Fk-z3DX8PMgKeCtqeCIsf1dKH9mMwA.webp?r=5e5`,
      rankImage: <Rank1 />,
    },
    {
      title: "기상청 사람들: 사내연애 잔혹사 편",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdC9WZd0ep26WcLBgnSHBXhP93YLWR0xAktzhucMTrpEMsWhOZ5xbOwc67lPnyAWhZzDwVWOlFxC0m_OdhmlSsAWhU735ej82nBO4agb3MsfHrPTuKfY4XLYR7Ky9feqUj8etk2slBM3og.webp?r=9b3`,
      rankImage: <Rank2 />,
    },
    {
      title: "소년심판",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTp5ByxeNASDVIKK4DxUhGuescEXqQyFuYipohPsIirvpP38wse7bwk32RY5N9Glcd8kMYYI51Oml6iHhGgE931KhK3vT-huoMbVOOVTieCcjqTd8yLfEZCWKz-WMw.webp?r=802`,
      rankImage: <Rank3 />,
    },
    {
      title: "사내맞선",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABT1PRBcZrT2wwFhHJ-BSPHEdQ4J5ryhTyqmV966K9lM25j17ADvl14s-aLZywGScrI5EVN5sVzgfVRNh1zjgEu954IsGeF4WXZf-jUCJBcWLL8wiFzbad8MF9EvzsTjg09MQPS-ggdRA6A.webp?r=13f`,
      rankImage: <Rank4 />,
    },
    {
      title: "결혼작사 이혼작곡",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABS4F_YzUc5JLyThFieWwAonxyjFPFJt-Y8EN9PjDmSAGV8ZS_SJ-lur_SV6DZYrbmLTsRE00-ZVDVBADq-RnisqS6CalFvMOX9f__0J0TUdiJvfoTgfD3xZvdRttyUvgbac96RVQ5IDMTw.webp?r=a2e`,
      rankImage: <Rank5 />,
    },
    {
      title: "서른, 아홉",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABX9LLc2pXusTmq2U7nLjydAqXutw2Si9ILWz0p9yUj1d29sCVh8m-Dlskba8Y7pAo5GQUR47y1a9HsIPob3Tvw_38tIlEO2XfmYGUDXTDZeN2SWon0tcmmxaYh65SccYL4M.webp?r=bb7`,
      rankImage: <Rank6 />,
    },
    {
      title: "블랙 크랩",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbG6mt7_7mgHc11LGbr-xvw0mgVqAWGFDJPhnv3FI8adNTIANL2LmqTd83PlCdlEhS6yzTU2lR-13edETBWEoAfmtvSap5-IVlaHxmxpJoWiMJutF2X9Q2NQJfaqNw.webp?r=148`,
      rankImage: <Rank7 />,
    },
    {
      title: "맨 인 더 다크 2",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQ48mrf9ZBaAzh9ax8CwIWweWZ9CmPo1hdtGTGu3FDRTAt3r1ZUAkDX0S0CU-uDr37VNunDDd7gHOnUwP9meUne46pg4.webp?r=959`,
      rankImage: <Rank8 />,
    },
    {
      title: "그 해 우리는",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYSDcHoCNISn4dRartsmQ6ChBZn2Iijmrk_uRmPk_cMmpEwSOymzJ65PsZA5JcaMPLMA_QXax4PaHZvxSeARWcGOoB9w.webp?r=e46`,
      rankImage: <Rank9 />,
    },
    {
      title: "지금 우리 학교는",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABX0jMwQdhhtmMY7czSTsLwWJR3N5Jkzjp7BDe-v2ivCa9WF7_xLp8Sbw7YFX5k4WBC4NkdEJZpMPxskw7c1e2-JylzsGi1hvwzEmrTG63bNKkoRqzy9J5PuyZn6-fg.webp?r=686`,
      rankImage: <Rank10 />,
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
      <MainView top10={top10} wishlist={wishlist} waiting={waiting} />
      <Footer center home />
    </LatestStyle>
  );
}
