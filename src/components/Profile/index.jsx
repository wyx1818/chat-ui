import React from 'react'
import PropTypes from 'prop-types'
import 'styled-components/macro'

import StyledProfile, { Album, AlbumSection, AlbumTitle, CloseIcon, ContactSection, Photo, SocialLinks } from './style'
import Avatar from '../Avatar'
import Paragraph from '../Paragraph'
import Icon from '../Icon'
import Separator from '../Separator'
import Text from '../Text'
import Emoji from '../Emoji'

import { faGithub, faLinkedin, faWeibo } from '@fortawesome/free-brands-svg-icons'
import { ReactComponent as Cross } from 'assets/icons/cross.svg'
import face from 'assets/images/face-female-2.jpg'
import photo1 from 'assets/images/1.jpg'
import photo2 from 'assets/images/2.jpg'
import photo3 from 'assets/images/3.jpg'

function Profile ({ children, ...rest }) {
  return (
    <StyledProfile { ...rest }>
      <CloseIcon icon={ Cross }/>
      <Avatar
        src={ face }
        size="160px"
        status="online"
        statusIconSize="25px"
        css={ `
          margin: 26px 0;
        ` }
      />

      <Paragraph
        size="XLarge"
        css={ `
          margin-bottom: 12px;
        ` }
      >
        慕容天宇
      </Paragraph>

      <Paragraph
        size="medium"
        type="secondary"
        css={ `
          margin-bottom: 18px;
        ` }
      >
        北京市 朝阳区
      </Paragraph>

      <Paragraph
        css={ `margin-bottom: 26px` }
      >
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */ }
        帮助客户构建网站，并协助在社交网站上进行推广 <Emoji label="fire">🔥</Emoji>
      </Paragraph>

      <SocialLinks>
        <Icon.Social icon={ faWeibo } bgColor="#F06767" href="http://www.weibo.com"/>
        <Icon.Social icon={ faGithub } bgColor="black" href="https://github.com/"/>
        <Icon.Social icon={ faLinkedin } bgColor="#2483C0" href="https://www.linkedin.com/"/>
      </SocialLinks>

      <Separator style={ { margin: '30px 0' } }/>

      <ContactSection>
        <Description label="联系电话">+86 13866668888</Description>
        <Description label="电子邮件">zuiyu1818@gmail.com</Description>
        <Description label="个人网站">https://zuiyu1818.cn</Description>
      </ContactSection>

      <Separator style={ { margin: '30px 0' } }/>

      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">相册（31）</Text>
          <a>查看全部</a>
        </AlbumTitle>
        <Album>
          <Photo src={ photo1 }/>
          <Photo src={ photo2 }/>
          <Photo src={ photo3 }/>
        </Album>
      </AlbumSection>
    </StyledProfile>
  )
}

function Description ({ label, children }) {
  return (
    <Paragraph>
      <Text type="secondary">{ label }: </Text>
      <Text>{ children }</Text>
    </Paragraph>
  )
}

Profile.propTypes = {
  children: PropTypes.any
}

export default Profile
