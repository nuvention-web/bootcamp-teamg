import React from 'react';



const Restaurant = ({ name, description, restaurantId, imageId }) => {
    return(
        <List.Item
            title={name}
            description={description}
            left={props => <List.Icon {...props} icon="folder" />}
        />
    )
}

export default Restaurant;