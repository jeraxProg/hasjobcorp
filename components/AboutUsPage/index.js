import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import {
  AboutUsContainer,
  AboutUsBannerSection,
  BannerContainer,
  ContainerTitle,
  ContainerSubTitle,
  BodyContainer,
  BodyTitle,
  BodyDesc,
  AboutUsDesc
} from './components'

const AboutUsPage = () => {
  const { t:translate } = useTranslation();

  return (
    <AboutUsContainer>
      <AboutUsBannerSection>
        <BannerContainer>
          <Row>
            <Col className="px-md-5">
              <ContainerTitle className="mb-2 mb-md-4">{translate('aboutus')}</ContainerTitle>
              {/* <ContainerSubTitle>Get the latest news, updates and tips</ContainerSubTitle> */}
            </Col>
          </Row>
        </BannerContainer>
      </AboutUsBannerSection>
      <BodyContainer className="mt-5">
        <BodyTitle className="mb-3">{translate('titleAbout')}</BodyTitle>
        <BodyDesc className="col-md-12">{translate('aboutHaSOlution')}</BodyDesc>
        {/* <AboutUsDesc className="mt-5 mb-5">
          <Row> */}
        {/* <Col className="col-12 col-lg-6">
              <Image
                  // loader={myLoader}
                  src={"/images/about-us-page/img-about2.png"}
                  alt=""
                  width={696}
                  height={534}
                  quality={100}
              />
            </Col> */}
        {/* <Col className="mt-4 mt-lg-0 col-12 col-lg-6"> */}
        <br />
        <BodyTitle className="mb-3">{translate('missionTitle')}</BodyTitle>
        <BodyDesc>{translate('mission')}</BodyDesc>
        <br />
        <br />
        <BodyTitle className="mb-3">{translate('visionTitle')}</BodyTitle>
        <BodyDesc>{translate('vision')}
        </BodyDesc>
        <br />
        <br />


        {/* </Col> */}
        {/* </Row>
       </AboutUsDesc> */}
      </BodyContainer>
    </AboutUsContainer>
  )
}

export default AboutUsPage;