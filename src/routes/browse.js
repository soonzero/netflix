import Header from "components/common/header";
import Footer from "components/common/footer";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MainView from "components/common/mainview";
import SelectProfile from "components/common/profiles";
import { useSelector } from "react-redux";
import { ReactComponent as Orange15 } from "images/orange-15.svg";
import { ReactComponent as Red18 } from "images/red-18.svg";
import { ReactComponent as Yellow12 } from "images/yellow-12.svg";
import { ReactComponent as GreenAll } from "images/green-all.svg";
import { ReactComponent as Academy } from "images/academy.svg";
import { useNavigate } from "react-router-dom";
import Top10 from "components/common/top10";
import New from "components/common/new";
import ThisWeek from "components/common/thisweek";
import { HomeStyle } from "components/common/styled";
import Loading from "components/common/loading";

export default function Browse() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const selectedProfile = JSON.parse(sessionStorage.getItem("selectedProfile"));

  const main = [
    {
      title: "파워 오브 도그",
      image:
        "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcw6ehmdHXhLnhYdvMp7ZgwOgHAumrTDbt90PeKtUuiMeMvZyjFMkvlHLtiLkTqOgl7SFBFuI_UFzXiP7bEupJZKwbLE.webp?r=db2",
      logo: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/0jxQXg4biAHes0_WdLiCw28fDpg/AAAABQHOfVux9XDGqMHbGEBva0lUrkhtHdeAsyHvXVUUnRwZUvbkp0x7TyRZO6TITuWnhbq89FFSUTQsbzLtrvx90tc3Bw3B9ZMe6c5UQKC5kj_wIlJuQXRsRHYvdRqhfM5_XDj4Drfgh2y1AfBnIFViEhvNi9yPWHI4EaaQkxLUvn-UdQ.webp?r=619",
      rating: <Orange15 />,
      supplement: <Academy />,
      message: "2022년 아카데미 후보작",
      synopsis:
        "권위적이지만 카리스마 넘치는 목장주. 그가 동생의 새로운 부인과 10대 아들을 잔인하게 조롱하고 괴롭힌다. 오랜 세월 숨겨져 있던 비밀이 수면 위로 떠오르기 전까지.",
    },
    {
      title: "기생충",
      image:
        "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTsB2F1m-HHnQFx2gUtf5i-2GrWAay1lTtnUgqjcW9DQtesYw_uGQ1VRyF5mEkHMNSUKPf_ImUrYRLs40gxYKqh1mwtG.webp?r=5af",
      logo: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWpotv6utRbhV6zIhloeE6iQdHgGSje5B7S2CBL_y_y5chYd5sQtZQDxm27hvTq-UMJgzaxkkmKODb18W4_MpJM8zaPKIEM_xeFX.webp?r=f2a",
      rating: <Orange15 />,
      synopsis:
        "반지하에서 근근이 먹고 살던 가족. 우연히 생긴 알바로 부잣집에 발을 들이더니, 어느덧 온 식구가 저택 곳곳의 밥줄을 꿰찬다. 공간도 세간도 남아돌잖아요. 그러니 우리 같이 나눠 씁시다.",
    },
    {
      title: "레이니 데이 인 뉴욕",
      image:
        "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRoQ-5GVWGDZQbXiHBaaYwkqxLREH1AH5p3IxAXrInpqDU-doe9rKxGqRwAQooCZ4JlVA4NtvG6K-5Op1q_bfxWdPXS4.webp?r=3f9",
      logo: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUO2ItpS1ECSa1BlM3vakii7soej6iJDty2BHGSEl93JGOgxdbhcWhGRvZ8D1pnutbIRzIzemqPbaS4ZzhKc9iofiKtNa5r41Pqq.webp?r=70e",
      rating: <Orange15 />,
      synopsis:
        "학교 신문 취재를 위해 뉴욕으로 향하는 대학생 커플. 로맨틱한 주말을 꿈꾸며 여행을 시작하지만, 매력 넘치는 뉴요커들과의 만남으로 예상치 못한 일들에 휘말린다.",
    },
    {
      title: "틱, 틱... 붐!",
      image:
        "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVS0uoMoxH4iSGGrFHTXu73BDvyKh5k18lsp7USTriqWsJqhqtR6yUjksTGcQG-9QDx6XbKH_AnnQfsS0kW_wF6KJFur.webp?r=cfd",
      logo: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/0jxQXg4biAHes0_WdLiCw28fDpg/AAAABcSvNfUaxE1t55gRkmCtbEt6GzHZeTPyoI1O20Kh9G6SHPjE-LgqqHPh36wMd_jylaMF4kyIPYCtP4_NCSRG8xFOzZE_ritciclOWq03zR2LXvj68ASxhVp2iydU5RZq91CY1x_n7QZaGOjxw7c7l2ugnNVsoZLjemsiYnZNZadfIQ.webp?r=5c3",
      rating: <Yellow12 />,
      supplement: <Academy />,
      message: "2022년 아카데미 후보작",
      synopsis:
        "서른 살 생일을 코앞에 둔 유망한 작곡가. 사랑과 우정뿐만 아니라 심적 압박도 헤쳐나가야 하는 상황이다. 시간이 다하기 전에 위대한 작품을 만들어야 한다는 중압감은 어떻게 다스려야 할까.",
    },
    {
      title: "포레스트 검프",
      image:
        "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABas72mKDSiuB3-ly_25pfXls6iwGQrqw_OM6PQFB2aWzF3xLhbX7a5IeByMpsKmvOuctaPxxXHUikrtYOEOYnqjgW1fd.webp?r=9f4",
      logo: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSISfA547FXiidNT9rPNrbgLVdivW6eAqZ9a2YnnwVYYWdzKihz40w6Lkp2Khga_TftGSn9MAFOVFf04ZyVCMIavQO4lcYEQyMRe.webp?r=f8e",
      rating: <Yellow12 />,
      message: "넷플릭스에서 시청할 수 있는 마지막 날: 3월 31일",
      synopsis:
        "전쟁 영웅에서 유명 인사로, 억만장자에서 예언자로. 세상에서 가장 특별한 머리와 멋진 다리를 가진 남자의 지그재그 질주. 세상도 운명도, 그를 따라잡진 못할 것이다.",
    },
    {
      title: "새콤 달콤",
      image:
        "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV-7msNc9tTXqMACKMVjUf5mOfL0TG_Zynkq_fnWAdNYHi0mYAFvRtSLM3Qpnnbf5hLNm4wiNURzKplrrW05hXctrT5W.webp?r=36b",
      logo: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTT5N3V9cPPivP0rzNOWIUMx3oFaffhXpCKMUP8Ebz3WWB8hrSpXGoG25Oe97SRn1ADVmTGWMZ725BCQjJ181pBwN4LPE9fVA6_Gh33x2m-g2QD2zZA7_ZzQPZFkzAiUnotM1zXX3tvkOx2rUBUtUxhTirXDg62bVz5-T15G_lWKVQ.webp?r=ca0",
      rating: <Orange15 />,
      synopsis:
        "눈에서 멀어지면 마음에서도 멀어진다? 장거리 연애를 시작한 한 커플이 현실의 벽에 부딪힌다. 달콤했던 그들의 연애가 점점 쓴맛으로 변해가는 느낌. 아무리 애써봐도 소용없는 걸까?",
    },
    {
      title: "뷰티 인사이드",
      image:
        "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQt8kPkzGtKdlJwNvytkcOTXJFKfiFUnVb1uHiD1mc_TUUnLRb9yjLlbboX9Ui5d1qGC5ayvATTNg713Bo0agV7Ad1Px.webp?r=fce",
      logo: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUYzGgsPElMGIq8SvpGg21MLL_eXwozCYewwiwGe_r-JSqX4KCoinWAaI_pslGtcdL9hzDoO1tz_C-qJQv7c6yUx3BVRqZYNtc1h.webp?r=f64",
      rating: "15+",
      synopsis:
        "이번엔 누구? 한 달에 일주일, 다른 사람으로 사는 여자. 이 사람 누구? 열두 달 매일, 다른 사람 얼굴을 못 알아보는 남자. 남모를 속사정이 있는 남녀가 만났다. 서로의 비밀스러운 세계로 발을 디딘 둘의 로맨스는 어떤 모습일까.",
    },
    {
      title: "보디가드",
      image:
        "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbeEMBwKklu6tuFbxVRRj8UQ7l71wPwylMx1bUOWX3tVrt2yZUgjGu0hLHMHV296--9PJAF3RHS2IpSfdoda8l5gN3Kn.webp?r=dc8",
      logo: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYWZIRfmEXVuZF_J8s8LFM3vlE-ScCMRrEj_j20DUNjFN9A1tevmXtdGit1IkJgE33x4J8WT5te7IJpIK_4Vg_0NEDPkhT2wveNYxQ-NUT9lHfutHYMbswBthpr2ckAnqAF1q1cnhW4wmWQS5WZ-mX8wkuarFEGKDBEatdT41nQuHA.webp?r=d39",
      rating: <Red18 />,
      synopsis:
        "트라우마를 안고 돌아온 참전 군인. 열차 테러를 막을 정도로 유능한 그가 장관의 경호를 맡는다. 하지만 장관은 그를 전쟁으로 이끈 장본인. 둘의 운명은 어디로 갈까.",
    },
    {
      title: "슈퍼키드 디온",
      image:
        "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcTNBdMBhZPyicipE1Mm-Ggh0E4ejb3Qw4F3UjIPkh-WVqIqKfAukXMn_D7wt5Qcp_bipyKdbzx9LxIaXdo7WOn0VbaC.webp?r=b1e",
      logo: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZ7ByLzi4zFh_ptNOnSs6od43IsqbTr71f95X5xLY51O9YgArr_bjRYxh1kBQv6GnHl3ktqXxDJu68gsIXaqKV5_4Zc1MgNRc5Q7ECdwKKaS-7BvMo9FwF4JvEhFrcxdkrXat99q7H9xiCgR9F6W4MJcUq7putG78lhzcH7xskrfYQ.webp?r=97e",
      rating: <Yellow12 />,
      synopsis:
        "아들이 엄청난 초능력을 갖고 있다! 놀라움도 잠시, 아들의 안전이 걱정되는 싱글맘. 이들 모자는 비밀을 숨긴 채, 그들을 둘러싼 미스터리를 밝히기 위해 고군분투한다.",
    },
    {
      title: "우리의 지구",
      image:
        "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd1xLgDc_ghmsT2GwCJLDzKUyWCIEhAjLduZEvi_zyHd5bOiE4h9gUhRkeDTcj0_i7hNunOYalfaUSdk9emKopPdD7pV.webp?r=2f6",
      logo: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRJisYJOp3s1u8mHW5Gkyzr2nFp6gT2B7IZGlYF_ej42vjb86UnZIwGPikOOnbydTTtU2EqTtIX0yqMIkiIYgKBeo4Y_8I2zy_mgyO-HGwRpUHtcfF32HiBX37lBDmjNgls_n1yI73hSXMoVq-svSBiRP_a8qNXLItHomILjeMaJ4w.webp?r=8f6",
      rating: <GreenAll />,
      synopsis:
        "압도적인 스케일, 경이로운 영상미 그리고 전 인류를 향한 메시지. 우리 지구에 관한 가장 광대한 탐험을 만난다. 자연의 장관과 공존의 철학을 담은 대작 다큐멘터리.",
    },
  ];

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

  const foreignMovie = [
    {
      title: "애덤 프로젝트",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeTraESWinzhSJIaPesk37GZej5XwuZg5uaYDAgAd8Le73K7jxf6DaXx2CbmanXCXUJtucEPszMv0dmilfyaGK4PAyyeMx0GCIh43hBbUg_Uw5jR0qnlqZC_mpZA.jpg?r=7ba`,
    },
    {
      title: "돈 룩 업",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABahVYGWhYyf2fMuO5eWzaQXCBg_Jp6blF-7yEKGK3li3BoxO9at6_T148Nf1fhp3wgGcPPhBDFvUYjyulpm-qgq4zBE2nSrWYjvkYgVHcKNJ0QOCd6mKhmDhw8gl.jpg?r=371`,
    },
    {
      title: "블랙 크랩",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaDJj_ri5gK8RhHfhcwJgkZKLiTbruDiWnj_ibEq1k1yTRS09qL7gSQ-g-MkrjE1EMZ4NWDFLJy6kRCy5WFtiovDxW-HZ_voupSxyvDmjVpvvSSeYkepAjhFuKbm2jjc27x56NWVRKe-eBzYBpzTblVxiHVqdNDXripemMVagms126ApODa1X_4.jpg?r=eb8`,
    },
    {
      title: "구조견 루비",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSLSw8vp56EEHXoM89rr3a_HWGLXWv2Ncc7bmWCPuMEUKxGHqC3-3Mf_H_YeNFoNIuW8yGmqGHAcRH-XTDEW_s407Pg9gCfNmF9rAXIazqXLk_Df1-NNfIDIMNar.jpg?r=4cf`,
    },
    {
      title: "인 타임",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbJHbTGw07w7T2BZOvD_-x_48tOXdWz_fz3VIpZynuudoCVsc2qN5W3qN83LHyUXkJt63fT1Fyl98iB4wgOvzqRrTvg.webp?r=84c`,
    },
    {
      title: "이미테이션 게임",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWVTp1CoYHKW1KwMkmm0HmXY1F3SeRlvUZDu_hSxkpLl4KcHJbgJTyUpUpm_KnlgX_5Or5UluekHFMXfrAJ0UfW7ux0.webp?r=233`,
    },
    {
      title: "인턴",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfyRE92_CeVKVNxiVOOGFZqz3dVyJ1Wbyxk80gyoSvxhKSXAeHJvgPLnvXZtf9VcWBjkorPYwY1GaaTjsxMLsrCgVYc.webp?r=14c`,
    },
    {
      title: "트루먼쇼",
      image: `https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXT-fHBaLnYtjtNrh1qB5ap4yjJSAybcAB3re4Ml10i5554NzpEfToBjLQQf5SkGqSx_goGc7gJCMhLmTKh82o3IoCc.webp?r=408`,
    },
  ];

  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      navigate(`/login`);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <HomeStyle>
      {!isLoading && (
        <>
          <Header display={selectedProfile} />
          <div className="main-view">
            <div className="main-view-container">
              <MainView
                contents="main"
                main={main}
                wishlist={wishlist}
                foreignMovie={foreignMovie}
              />
              <Top10 />
              <New />
              <ThisWeek />
            </div>
          </div>
          <Footer home center dark />
          {selectedProfile == null && <SelectProfile />}
        </>
      )}
    </HomeStyle>
  );
}
