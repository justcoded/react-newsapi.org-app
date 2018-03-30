import I18n from 'react-native-i18n';
import locales from './locales';

I18n.fallbacks = true;

I18n.translations = locales;

export default I18n;