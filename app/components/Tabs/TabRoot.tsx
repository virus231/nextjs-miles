import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { TabContent } from './TabContent';

type Props = {
    tabItems: {
        id: string;
        title: string;
    }[];
};

export const TabRoot = (props: Props) => {
    const [key, setKey] = useState<string>('all');

    const { tabItems } = props;

    return (
        <Tabs activeKey={key} onSelect={(k) => setKey(k || '')} id="myTab">
            {tabItems.map((item: { id: string; title: string }) => {
                return (
                    <Tab as="div" key={`tab-${item.title}`} className="nav-item" eventKey={item.title} title={item.title.toUpperCase()}>
                        <TabContent content={item} />
                    </Tab>
                );
            })}
        </Tabs>
    );
};
