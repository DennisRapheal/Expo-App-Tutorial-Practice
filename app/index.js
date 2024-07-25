import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <SafeAreaView style = {{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
            // Options to configure how the screen gets presented in the navigator. It accepts either an object or a function returning an object:
                options = {{
                    headerStyle: { backgroundColor: COLORS.lightWhite, }, 
                    headerShadowVisible: false, 
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%" />
                    ),
                    headerTitle: "" //won't see "index" in the center
                }}
            />

            <ScrollView showsVerticalScrollIndicator = {false}>
                <View
                    Style={{
                        flex: 1, 
                        padding: SIZES.medium
                    }}
                >
                    <Welcome
                        setSearchTerm={setSearchTerm}
                        searchTerm={searchTerm}
                        handleClick={() => {
                            if(searchTerm){
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    ); 
}

export default Home; 