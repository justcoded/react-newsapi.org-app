import React, { Component }                                                 from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles, { ACTIVITY_INDICATOR_COLOR, ACTIVITY_SIZE }                  from './styles';
import I18n from '../../i18n';

import News from '../News';

export default class NewsList extends Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.articles.length && !nextProps.isLoading) {
      nextProps.clearAllFilters();
    }
  }

  render() {
    const {articles, isLoading, query, removeQueryFilter, clearFilter, isCached, oldQuery} = this.props;
    if (!isLoading) {
      return (
        <View style={styles.flatList}>
          {isCached ? (
            <View style={styles.cachedWrapper}>
              <Text>{I18n.t('cached-results')}</Text>
            </View>
          ) : null}
          <FlatList
            key='news-list'
            keyExtractor={(item, index) => index.toString()}
            data={articles}
            ListHeaderComponent={() => (
              query || clearFilter ? ([
                <View
                  style={styles.resultsWrapper}
                  key='results'>
                  <View style={styles.results}>
                    <Text style={styles.resultsText}>
                      {clearFilter ? (
                        `No matches with "${oldQuery}" were found`
                      ) : (
                        `Results for "${query}"`
                      )}
                    </Text>
                    <TouchableOpacity onPress={removeQueryFilter}>
                      <Image style={styles.closeButton} source={require('../../assets/close.png')}/>
                    </TouchableOpacity>
                  </View>
                  {clearFilter ? (
                    <Text style={styles.topNews} key='top-new-header'>Top News</Text>
                  ) : null}
                </View>
              ]) : null
            )}
            renderItem={({item, index}) => (
              <News item={item} index={index}/>
            )}
          />
        </View>
      )
    }
    return (
      <View style={[styles.loaderContainer, styles.horizontal]}>
        <ActivityIndicator size={ACTIVITY_SIZE} color={ACTIVITY_INDICATOR_COLOR}/>
      </View>
    )
  }
}