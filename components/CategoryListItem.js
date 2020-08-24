import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import SeoAndWebImage from '../assets/seo-and-web.png'

function CategoryListItem(props) {
    const { category, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image style={styles.categoryImage} source={SeoAndWebImage} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 16,
        borderRadius: 4,
        borderColor: "#000",
        backgroundColor: "#FFF",
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16,
        marginLeft: 4,
        marginRight: 4
    },
    categoryImage: {
        width: 64,
        height: 64
    },
    title: {
        textTransform: "uppercase",
        marginBottom: 8,
        fontWeight: "700"
    },
})

export default CategoryListItem;