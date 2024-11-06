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

const CategoryList: React.FC<CategoryListProps> = ({selectedCategory, onCategoryPress}) => {
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
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}>
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        onPress={() => onCategoryPress(category.id)}
                        style={[
                            styles.categoryButton,
                            selectedCategory === category.id && {
                                backgroundColor: theme.colors.text,
                            },
                        ]}>
                        <Text
                            style={[
                                styles.categoryText,
                                {
                                    color:
                                        selectedCategory === category.id
                                            ? theme.colors.activeCategoryTextColor
                                            : theme.colors.inactiveCategoryTextColor,
                                },
                            ]}>
                            {category.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 1,
    },
    container: {
        paddingHorizontal: 24,
        gap: 12,
    },
    categoryButton: {
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    categoryText: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CategoryList;
