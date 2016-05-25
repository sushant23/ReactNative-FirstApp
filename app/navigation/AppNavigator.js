'use strict'
import React, { Component, Navigator, Text} from 'react-native'


class AppNavigator extends Component{

  _renderScene(route, navigator){
    var gloabalNavigatorProps = { navigator }

    switch (route.ident) {
      case "MoviesList":
        return (
          <MoviesListScreen
            {...globalNavigatorProps} />
        )
        break;
      case "MovieDetail":
        return(
            <MovieDetailScreen
              {...globalNavigatorProps} />
        )
        break;
      default:
        return(
          <Text>{'Sorry route not found ${route}'}</Text>
        )


    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig ||
          Navigator.SceneConfigs.FloatFromRight
        })}
      />
    )
  }
}

const styles = React.StyleSheet.create({

  navigatorStyles: {

  }
})

module.exports = AppNavigator
