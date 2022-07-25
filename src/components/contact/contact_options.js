import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export const options = [
    {
        name: 'Email',
        icon: <MdOutlineEmail className='contact__option-icon'/>,
        desc: 'joaoborges2089@gmail.com',
        url: 'mailto:joaoborges2089@gmail.com'
    },
    {
        name: 'Messenger',
        icon: <RiMessengerLine className='contact__option-icon'/>,
        desc: 'João Borges',
        url: 'https://m.me/Joao.Borges.2089'
    },
    {
        name: 'WhatsApp',
        icon: <AiOutlineWhatsApp className='contact__option-icon'/>,
        desc: '',
        url: 'https://wa.me/+351967805378'
    }
]