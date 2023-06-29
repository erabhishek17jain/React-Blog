import React, { useEffect } from 'react';
import ScriptTag from 'react-script-tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { loadWhatsapp } from '../../services/functions';

const SocialMedia = () => {
    useEffect(() => {
        // loadWhatsapp()
    }, []);
    return (
        <>
            <ScriptTag src='https://apis.google.com/js/platform.js' />{' '}
            <div class='g-ytsubscribe' data-channelid='UCqgGu3C3r6pXKc9tg3v0mIw' data-layout='full' data-count='default'></div>
            <a class='twitter-follow-button' href='https://twitter.com/abhisheksagarp' data-size='large'>
                <FontAwesomeIcon icon={faTwitter} /> Follow
            </a>
            <ScriptTag async defer crossorigin='anonymous' src='https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v15.0' nonce='bGvblO4a' />
            <div id='fb-root'></div>
            <div
                class='fb-like'
                data-href='https://www.facebook.com/abhisheksagarp'
                data-width=''
                data-layout='button_count'
                data-action='like'
                data-size='large'
                data-share='true'
            ></div>
        </>
    );
};

export default SocialMedia;
