import React from 'react';
import { View, StyleSheet } from 'react-native';
import { carouselImages } from '../../constants/movies';
import {useTheme} from '../../providers/theme_provider';

interface CarouselPaginationProps {
    currentPage: number;
}

const CarouselPagination: React.FC<CarouselPaginationProps> = ({ currentPage }) => {
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
        marginTop: 16,
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
