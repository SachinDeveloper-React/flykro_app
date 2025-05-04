import {StyleSheet} from 'react-native';
import {theme} from '../../../utils';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {flex: 1, padding: 16, backgroundColor: '#fff'},
  tabs_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    marginBottom: 10,
  },
  tab_text: {
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 0.5,
    width: 100,
    textAlign: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  search_field: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '100%',
    borderWidth: 0.5,
    borderColor: theme.colors.border,
    borderRadius: 5,
    marginBottom: 16,
  },
  search_field_icon: {
    padding: 10,
  },
  search_field_suggestion: {flexDirection: 'row', alignItems: 'center'},
  search_field_suggestion_icon: {
    paddingRight: 10,
  },
  search_field_suggestion_text: {
    marginBottom: 2,
    fontWeight: '700',
  },
  search_field_suggestion_normal: {
    fontWeight: 'normal',
  },
  search_field_suggestion_bold: {
    fontWeight: 'bold',
  },
});

export default styles;
