import thumbsUp from '../assets/Emojis/thumbs-up.webp';
import meh from '../assets/Emojis/meh.webp';
import bullsEye from '../assets/Emojis/bulls-eye.webp';
import { Image,ImageProps } from '@chakra-ui/react';

interface EmojiProps {
    rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
    const emojiMap: { [key: number]: ImageProps } = {
        3: {src: meh, alt:'meh', boxSize:'25px' },
        4: {src: thumbsUp, alt:'recommended', boxSize:'25px'},
        5: {src: bullsEye, alt:'exceptional', boxSize: '35px'},
    };
  
    return (
    <Image marginTop={2} {...emojiMap[rating]} />
  )
}

export default Emoji;