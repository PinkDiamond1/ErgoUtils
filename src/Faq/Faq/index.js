import React, {Fragment} from 'react';

import PageTitle from '../../Layout/AppMain/PageTitle';
import Faq from 'react-faq-component';

const data = {
    rows: [
        {
            title: 'What is the utils fee?',
            content: 'Some small percentage of the final bid will be deducted as the utils fee. This percentage is currently set to 2%.',
        },
        {
            title: "Can I use my node's wallet through the internet?",
            content: 'It is possible to connect to your node through the internet to place bids and start auctions, however,' +
                ' since the app is currently over HTTP, it is strongly advised not to use nodes through the internet and instead' +
                ' use nodes locally or in a secure private network.'
        },
        {
            title: 'What tokens can I utils?',
            content: 'You can utils any token that you think is valuable somehow. Whether it is PoW-backed NFTs or it is representing some business shares, digital art, etc.',
        },
        {
            title: 'How can I trust Ergo Auction House with my wallet info?',
            content:
                'Ergo Auction House is open source and serverless.' +
                ' The hosting website is only there to serve the app for your browser, all the other things will be done locally without any communication with any servers.' +
                ' Your wallet info will be saved in the session storage of your browser securely and will be removed as soon as you close the app.',
        },
        {
            title: 'When is my wallet info used?',
            content:
                'Your wallet info will be used only when you confirm starting an utils or placing a bid on an existing one.',
        },
        {
            title: 'What happens to my ERG when I place a bid?',
            content:
                'Lets say you have placed a 10 ERG bid on an utils, then 10 ERG from your wallet will be locked with the utils contract.\
                 If you win the utils, then you will receive the auctioned token and your 10 ERG will be sent to the seller. Otherwise, \
                  immediately after someone places a higher bid, your 10 ERG will be returned to you.',
        },
        {
            title: 'What happens if I start an utils but no one places bid on it?',
            content:
                'Basically when you start an utils, you are the first bidder for the utils. If utils duration finishes ' +
                'and you remain the only bidder, then both your initial bid and your auctioned token will be returned to you.',
        },
        {
            title: "I have started an utils but can't see it in the General Auction page!",
            content:
                'Starting an utils is basically waiting for an transaction representing the utils to be mined. ' +
                'Depending on the network traffic, it may take a few minutes for the transaction to be mined and you see your utils. ' +
                'if you keep the app open, you will be notified about the status.',
        },
        {
            title: "I have placed a bid but it hasn't effected the utils yet!",
            content:
                'Just like when you start an utils, you have to wait for your bid transaction to be mined. ' +
                'It is possible that your bid transaction gets rejected because others also have placed bid on the utils. ' +
                'In any condition, if you keep the app open, you will be notified of the status.',
        },
    ],
};

export default class Faqs extends React.Component {
    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="FAQ"
                    subheading=""
                    icon="pe-7s-attention icon-gradient bg-night-fade"
                />
                <Faq
                    data={data}
                    styles={{
                        bgColor: '#f1f4f6',
                        titleTextColor: '#48482a',
                        rowTitleColor: '#78789a',
                        rowTitleTextSize: 'large',
                        rowContentColor: '#48484a',
                        rowContentTextSize: '16px',
                        rowContentPaddingTop: '10px',
                        rowContentPaddingBottom: '10px',
                        rowContentPaddingLeft: '50px',
                        rowContentPaddingRight: '150px',
                        arrowColor: 'black',
                    }}
                />
            </Fragment>
        );
    }
}
