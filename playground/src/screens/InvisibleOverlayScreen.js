const React = require('react');
const { SafeAreaView, Text } = require('react-native');
const { Navigation } = require('react-native-navigation');
const Screens = require('./Screens');

class InvisibleOverlayScreen extends React.Component {

  static options() {
    return {
      layout: {
        backgroundColor: 'transparent',
      },
      overlay: {
        interceptTouchOutside: false,
        handleKeyboardEvents: false,
      },
    }
  }

  dismissOverlay = () => {
    Navigation.dismissOverlay(this.props.componentId);
  }

  componentDidMount() {
    setTimeout(this.dismissOverlay, 10000);
  }

  render() {
    return (
      <SafeAreaView pointerEvents="none">
        <Text> INVISIBLE OVERLAY IS ACTIVE </Text>
      </SafeAreaView>
    )
  }
}

module.exports = InvisibleOverlayScreen;
