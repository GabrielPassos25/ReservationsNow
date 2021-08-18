import React, {useState, ReactNode} from 'react';
import { Dimensions, ScrollView} from 'react-native';

const { height } = Dimensions.get('window');

interface AuxProps {
    children : ReactNode
    size : number;
}

export function DynamicScrollView(props : AuxProps) {
    const [screenHeight, setScreenHeight] = useState(0);
    const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
        setScreenHeight(contentHeight);
    }
    const scrollEnabled = screenHeight + props.size > height;
    return( 
        <ScrollView scrollEnabled={scrollEnabled} onContentSizeChange={onContentSizeChange} showsVerticalScrollIndicator={false}>
            {props.children}
        </ScrollView>
    );
}
