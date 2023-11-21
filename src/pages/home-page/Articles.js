import {Heading, Text} from "../../components/in-components-reuseable-components/TypographyComponents";
import GoToLinkUnderlined from "../../components/in-components-reuseable-components/GoToLinkUnderlined";
import useSmallScreen from "../../hooks/useSmallScreen";
const ArticleCard = ({image,title,link}) => {
    const [isSmallScreen]=useSmallScreen()
    const articleImageStyle={
        width:isSmallScreen?'311px':'357px',
        height:isSmallScreen?'283px':'325px'
    }
    return(
        <div className={'d-flex flex-column justify-content-center gap-2 align-items-center align-items-lg-start'}>
            <img src={image}  alt={'article'} style={articleImageStyle}/>
            <Text size={20} weight={'LittleBald'}>{title}</Text>
            <GoToLinkUnderlined link={link}>Read More</GoToLinkUnderlined>
        </div>
    )
  
}
const Articles = () => {
  return(
      <div className={'container d-flex flex-column gap-3'} style={{marginTop: '48px',}}>
          <div className={'d-flex justify-content-between'}>
              <Heading className={'LittleBald'} level={4}>Articles</Heading>
              <div className={'align-self-center'}><GoToLinkUnderlined link={`/products`}>More Articles</GoToLinkUnderlined></div>
          </div>
          <div className={'d-flex gap-3 flex-column flex-lg-row justify-content-center align-items-center'}>
              <ArticleCard title={'7 Ways to decore your home'} image={'/images/home-page/article1.jpg'}></ArticleCard>
              <ArticleCard title={'7 Ways to decore your home'} image={'/images/home-page/article2.jpg'}></ArticleCard>
              <ArticleCard title={'7 Ways to decore your home'} image={'/images/home-page/article3.jpg'}></ArticleCard>
          </div>
      </div>
  )
}
export default Articles