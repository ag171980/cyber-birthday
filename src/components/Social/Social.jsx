import React, { useState } from 'react'

import TwitchIcon from '../../assets/icons/twitch.png'
import YoutubeIcon from '../../assets/icons/youtube.png'
import InstagramIcon from '../../assets/icons/instagram.png'
import DiscordIcon from '../../assets/icons/discord.webp'
import XIcon from '../../assets/icons/x.png'
import WhatsappIcon from '../../assets/icons/whatsapp.png'

import './Social.css'

const Social = () => {
  const [socials, _] = useState([
    {
      id: 0,
      icon: TwitchIcon,
      nombre: 'Twitch',
      url: 'https://twitch.tv/cybernahir',
      rel: '_blank'
    },
    {
      id: 1,
      icon: YoutubeIcon,
      nombre: 'Youtube',
      url: 'https://www.youtube.com/@cybernahir',
      rel: '_blank'
    },
    {
      id: 2,
      icon: InstagramIcon,
      nombre: 'Instagram',
      url: 'https://www.instagram.com/cybernahir',
      rel: '_blank'
    },
    {
      id: 3,
      icon: XIcon,
      nombre: 'X',
      url: 'https://x.com/cybernahir',
      rel: '_blank'
    },
    {
      id: 4,
      icon: DiscordIcon,
      nombre: 'Discord',
      url: 'https://discord.com/invite/durujSWhwC',
      rel: '_blank'
    },
    {
      id: 5,
      icon: WhatsappIcon,
      nombre: 'Whatsapp',
      url: 'https://whatsapp.com/channel/0029VaooMXIDp2QE4K6Gwa3f',
      rel: '_blank'
    }
  ])
  return (
    <div className='socials'>
      {socials.map(social => (
        <a
          key={social.id}
          className='social'
          href={social.url}
          target={social.rel}
          title={social.nombre}
        >
          <img src={social.icon} />
        </a>
      ))}
    </div>
  )
}

export default Social
