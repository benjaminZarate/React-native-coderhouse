import {Image} from 'react-native';

export default function GifImage()
{
    return <Image source={require('../gifs/hello.gif')} style={{height: 280, width: 280}}/>
}