import styled from "styled-components"

export default function SectionBetter(){
  return(<SectionContainer>
    
    <TextContainer>
      <TextContent>With <span>withyou company </span>
      Will be better.
      </TextContent>
    </TextContainer>
    <BannerContainer>
      <BannerTextBox>
      <BannerTitle>
      위드유 컴퍼니만의
      독보적인 마케팅 전략
      </BannerTitle>
      <BannerContent>
      AD Service
      </BannerContent>
      </BannerTextBox>
      <SlideContainer>
        <SlideHeader>
          <SlideArrowBox>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="#CCCCCC" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.9634 9.87516L25.7132 9.21354L27.0365 10.7132L26.2866 11.3748L24.9634 9.87516ZM15 20L14.3384 20.7498L13.4886 20L14.3384 19.2502L15 20ZM26.2866 28.6252L27.0365 29.2868L25.7132 30.7865L24.9634 30.1248L26.2866 28.6252ZM26.2866 11.3748L15.6616 20.7498L14.3384 19.2502L24.9634 9.87516L26.2866 11.3748ZM15.6616 19.2502L26.2866 28.6252L24.9634 30.1248L14.3384 20.7498L15.6616 19.2502Z" />
            </svg>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="#CCCCCC" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0366 9.87516L14.2868 9.21354L12.9635 10.7132L13.7134 11.3748L15.0366 9.87516ZM25 20L25.6616 20.7498L26.5114 20L25.6616 19.2502L25 20ZM13.7134 28.6252L12.9635 29.2868L14.2868 30.7865L15.0366 30.1248L13.7134 28.6252ZM13.7134 11.3748L24.3384 20.7498L25.6616 19.2502L15.0366 9.87516L13.7134 11.3748ZM24.3384 19.2502L13.7134 28.6252L15.0366 30.1248L25.6616 20.7498L24.3384 19.2502Z" />
            </svg>
          </SlideArrowBox>
        </SlideHeader>
        <SlideBox />
      </SlideContainer>
    </BannerContainer>
  </SectionContainer>
  )
}
const SectionContainer = styled.section`
  height: 729px;
  @media screen and (max-width: 720px){
    height: 494px;
  }
`
const TextContainer = styled.div`
  position:relative;
  display: flex;
  width: 100%;
  align-items: center;
`
const TextContent = styled.h2`
  font-weight: 700;
  font-size: 48px;
  word-wrap: break-word;
  width: 519px;
  line-height: 64px;  
  margin-left: 320px;
  letter-spacing: -0.025em;
  color:#000;
  span{
    color: #6A30F9;
  }
  @media screen and (max-width: 720px) {
    margin-left: 20px;
    font-size: 30px;
    line-height: 38px;
  }
`
const BannerTextBox = styled.div`
  margin-left: 360px;
  padding-top: 121px;
  @media screen and (max-width: 720px) {
    margin-left: 20px;
    padding-top: 48px;
  }
`
const BannerTitle = styled.h3`
  width: 340px;
  height: 112px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
  word-break: keep-all;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  @media screen and (max-width: 720px) {
    width: 238px;
    height: 70px;
    font-size: 28px;
    line-height: 35px;
  }
`
const BannerContent = styled.h6`
  width: 89px;
  height: 26px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  @media screen and (max-width: 720px) {
    width: 84px;
    height: 21px;
    font-size: 17px;
    line-height: 21px;
  }
`
const BannerContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 106px;
  height: 495px;
  width: 100%;
  background-color: #9573FF;
  @media screen and (max-width: 720px) {
    margin-top: 64px;
    height: 263px;
  }
`
const SlideContainer =styled.div`
  width: 631px;
  height: 521px;
  top: -106px;
  left: 970px;
  overflow: hidden;
  @media screen and (max-width: 720px) {
    width: 213px;
    height: 226px;
    top: 130px;
    left: auto;
    right: 20px;
  }
`
const SlideHeader = styled.div`
  position: absolute;
  top: -106px;
  left: 970px;
  width: 631px;
  height: 48px;
  display: flex;
  justify-content: right;
  @media screen and (max-width: 720px) {
    width: 213px;
    top: 130px;
    left: auto;
    right: 20px;
  }
`
const SlideArrowBox = styled.div`
  width: 88px;
  display: flex;
  gap: 8px;
  svg:hover{
    cursor: pointer;
    fill: black;
    @media screen and (max-width: 720px) {
      fill: white;
    }
  }
`
const SlideBox = styled.div`
  position: absolute;
  width: 631px;
  top: -58px;
  left: 970px;
  background-color: #FFE600;
  height: 473px;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 720px) {
    width: 213px;
    height: 154px;
    top: 202px;
    left: auto;
    right: 20px;
  }
`