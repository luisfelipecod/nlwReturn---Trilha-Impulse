import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: 40,
      backgroundColor: theme.colors.brand,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
  },

  title: {
      fontSize: 14,
      fontfamily: theme.fonts.medium,
      color: theme.colors.text_on_brand_color,
  }
});