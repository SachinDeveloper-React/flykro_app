import {StyleSheet} from 'react-native';
import {theme} from '../../../../../utils';

export const styles = StyleSheet.create({
  searchWidgetContainer: {
    marginBottom: 8,
    backgroundColor: 'rgb(247, 247, 247)',
    borderWidth: 1,
    borderColor: 'rgb(231, 231, 231)',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  searchWidgetContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    overflow: 'hidden',
  },
  searchWidgetTextContent: {
    flex: 1,
  },
  searchWidgetText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: theme.colors.gray,
    textTransform: 'uppercase',
  },
  searchWidgetTextBold: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 2,
  },
  searchWidgetTextSmall: {
    fontSize: 8,
    fontWeight: 'normal',
    flexWrap: 'wrap',
    lineHeight: 10,
  },
});
