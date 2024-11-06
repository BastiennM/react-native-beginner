import React from 'react';
import {
    ScrollView,
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
} from 'react-native';
import {Category} from "../../data/api";
import {useTheme} from "../../providers/theme_provider";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CategoryListProps {
    selectedCategory: Category;
    onCategoryPress: (category: Category) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
                                                       selectedCategory,
                                                       onCategoryPress,
                                                   }) => {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();

    const categories = [
        { id: Category.ALL, label: 'All' },
        { id: Category.ROMANCE, label: 'Romance' },
        { id: Category.SPORTS, label: 'Sport' },
        { id: Category.KIDS, label: 'Kids' },
        { id: Category.HORROR, label: 'Horror' },
    ];

    return (
        <View style={[
            styles.wrapper,
            { paddingTop: insets.top + 8 }
        ]}>
            <View style={styles.backgroundBlur}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {categories.map((category) => (
                        <TouchableOpacity
                            key={category.id}
                            onPress={() => onCategoryPress(category.id)}
                            style={[
                                styles.categoryButton,
                                selectedCategory === category.id && styles.selectedButton,
                            ]}>
                            <Text
                                style={[
                                    styles.categoryText,
                                    selectedCategory === category.id && styles.selectedText,
                                ]}>
                                {category.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 1,
        paddingHorizontal: 24,
    },
    backgroundBlur: {
        backgroundColor: 'rgba(71, 68, 65, 0.8)',
        padding: 3,
        borderRadius: 90,
        overflow: 'hidden', // Ajout de cette ligne
    },
    container: {
        paddingHorizontal: 24,
        gap: 12,
    },
    categoryButton: {
        paddingHorizontal: 15, // Padding par défaut
        paddingVertical: 12,
        borderRadius: 100,
    },
    selectedButton: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24, // Padding plus grand quand sélectionné
    },
    categoryText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    selectedText: {
        color: '#000000',
    },
});

export default CategoryList;
