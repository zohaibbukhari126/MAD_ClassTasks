import React from "react";
import { StyleSheet,View ,Text, Image} from "react-native";
//this componet is also called child component beacuse it will take instructions from parent
export default function ImageDetail(props){

    return(
        <view>
            <Text>
                {props.title}
            </Text>
            <Image>
            </Image>
<Image source={props.imageSource}>

</Image>
        </view>

    )
}

const styles = StyleSheet.create({});