import React from "react";
import {
    Html,
    Body,
    Container,
    Text,
    Link,
    Preview,
    Tailwind,
} from "@react-email/components";

interface WelcomeTemplateProps {
    name: string;
}

const WelcomeTemplate = ({ name }: WelcomeTemplateProps) => {
    return (
        <html>
            <Preview>Welcome aboard!</Preview>
            <Tailwind>
                <Body className='bg-white'>
                    <Container>
                        <Text className='text-xl font-bold'>Hello {name}!</Text>
                        <Link className='text-lg' href='http://google.com'>
                            google.com
                        </Link>
                    </Container>
                </Body>
            </Tailwind>{" "}
        </html>
    );
};

export default WelcomeTemplate;
