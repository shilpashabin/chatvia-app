import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreenStack from './home_screen_stack_navigation';
import SettingsScreenStack from './settings_stack_navigation';
import Status from '../screens/Status/share_status';
import Invites from '../screens/invites_screen/Invites';
import Archived from '../screens/archived_screen/Archived';

import DrawerContent from './drawer_content';

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerStyle={{ width: '88%' }}
                drawerContentOptions={{
                    inactiveTintColor: 'rgba(0,0,0,0.75)',
                    labelStyle: { fontSize: 16, fontWeight: '700' }
                }}
                drawerContent={props => <DrawerContent {...props} />}
            >
                <Drawer.Screen name="HomeStack" component={HomeScreenStack} />
                <Drawer.Screen name="SettingsStack" component={SettingsScreenStack} />
                <Drawer.Screen name="Status" component={Status} />
                <Drawer.Screen name="Invites" component={Invites} />
                <Drawer.Screen name="Archived" component={Archived} />


            </Drawer.Navigator>
        </NavigationContainer >
    );
}