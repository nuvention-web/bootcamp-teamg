import React from 'react';
import { List } from 'react-native-paper';



const Restaurant = ({ name, description, id, imageId }) => {
    return(
        <List.Item
            title={name}
            description={description}
            left={props => <List.Icon {...props} icon="folder" />}
        />
    )
}

export default Restaurant;