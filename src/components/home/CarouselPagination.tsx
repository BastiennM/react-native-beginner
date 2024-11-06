import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {useTheme} from '../../providers/theme_provider';
import {Movie} from "../MovieList";

interface CarouselPaginationProps {
    currentPage: number;
    carouselImages: Movie[];
}

const CarouselPagination: React.FC<CarouselPaginationProps> = ({ currentPage, carouselImages }) => {
    const { theme } = useTheme();
    const styles = createStyles(theme);

    return (
        <View style={styles.pagination}>
            {carouselImages.map((_: any, index: React.Key | null | undefined) => (
                <View
                    key={index}
                    style={[
                        styles.paginationDot,
                        currentPage === index && styles.paginationDotActive,
                    ]}
                />
            ))}
        </View>
    );
};

const createStyles = (theme: any) => StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginTop: 24,
        marginBottom: 24,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: theme.colors.inactiveCarouselPaginationColor,
    },
    paginationDotActive: {
        backgroundColor: theme.colors.primary,
    },
});

export default CarouselPagination;
