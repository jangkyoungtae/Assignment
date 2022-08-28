import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function Second(){
  const [gnbHeader, setGnbHeader] = useState(false); 
  const nav = useNavigate();
  const throttle = (callback:Function , delay:number)=>{
    let timer: ReturnType<typeof setTimeout>| null = null;
    return ()=>{
      if (timer) return;
      timer = setTimeout(()=>{
        callback();
        timer = null;
      },delay)
    }
  }
  const updateScroll = () => {
    const position = window.pageYOffset;
    console.log(position);
    if(position > 400 && !gnbHeader){
      setGnbHeader(true);
    }else if(position < 400 ){
      setGnbHeader(false);
    }
  };
  const handleScroll = throttle(updateScroll, 100);
  const goFirst=()=>{
    nav('/');
  }

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, {passive : true});//스크롤이벤트 구독
      return() => {
          window.removeEventListener('scroll', handleScroll);//스크롤이벤트 구독 해제
      }
  }, [])
  return(
    <SecondContainer>
      <LogoContainer>
        {gnbHeader ? 
        <GNBHeader>
          <GNBIcon onClick={goFirst} src={require('../Assets/Images/arrowLeft.svg')} alt="arrowleft" />
          <GNBContent>
            평범한 한복데이트는 그만! 고퀄리티 
          한복대여  체험단 모집
          </GNBContent>
        </GNBHeader> 
        : <SecondLogo src={require('../Assets/Images/logo.svg')} alt="logo" />}
      </LogoContainer>
      <ContentImg src={require('../Assets/Images/example.png')} alt="content"/>
      <SecondTitle>
        
        평범한 한복데이트는 그만! 고퀄리티 한복대여 체험단 모집
        
      </SecondTitle>
      <DummyData>
      애국가의 역사</DummyData>
      <DummyData>애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는 뜻이에요. 우리나라는 애국가에 특별한 이름을 붙이지 않고 국가(國歌)로 사용하고 있어요.</DummyData>

      <DummyData>오늘날 불리고 있는 애국가 노랫말은 우리나라가 외세의 침략으로 위기에 처해있던 시기(1907년 전후)에 나라 사랑하는 마음과 우리 민족의 자주의식을 북돋우기 위해 만들어진 것으로 보여져요.</DummyData>

      <DummyData>그 후 여러 선각자의 손을 거쳐 현재와 같은 내용을 담게 되었는데 이 노랫말에 붙여진 곡조는 스코틀랜드 민요 ‘올드 랭 사인 (Auld Lang Syne)’ 이었답니다. 당시 해외에서 활동 중이던 작곡가 안익태(安益泰) 선생은 애국가에 남의 나라 곡을 붙여 부르는 것을 안타깝게 여겨 1935년에 오늘날의 애국가를 작곡하였다고 해요.</DummyData>

      <DummyData>1948년 대한민국 정부가 수립된 이후 현재의 애국가가 정부의 공식행사에서 불려지고, 교과서에도 실리면서 전국적으로 불려지기 시작했답니다.</DummyData>

      <DummyData>한 세기 가까운 세월 동안 슬플 때나 기쁠 때나 우리 겨레와 운명을 같이 해 온 애국가를 부를 때마다 우리 모두 선조들의 나라 사랑 정신을 새롭게 되새겨보아요.
      </DummyData>
    </SecondContainer>
  )
}
const SecondLogo = styled.img`
  padding: 20px 24px;
`
const LogoContainer = styled.div`
  position: sticky;
  top: 0;
  height: 64px;
  background-color: white;
  width: 100%;
  overflow: hidden;

`
const ContentImg = styled.img`
  width: 100%;
`
const SecondContainer = styled.div`
  position: relative;
  width: 375px;
  margin: auto;
  border: 1px solid black;
`
const SecondTitle = styled.h5`
  margin: 20px;
  font-weight: 700;
  font-size: 21px;
  line-height: 26px;
  letter-spacing: -0.025em;
  color: #000000;
`
const DummyData = styled.p`
  line-height: 50px;
  font-size: 20px;
  padding-left:20px;
  padding-right: 20px;
`
const GNBHeader = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
`
const GNBContent = styled.p`
width: 180px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  padding-top: 16px;
  padding-left: 12px;
`
const GNBIcon = styled.img`
  cursor: pointer;
  width: 24px;
  margin-left: 20px;
`