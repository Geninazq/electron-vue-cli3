module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "appId": "com.example.app",
                "productName": "aDemo", //项目名，也是生成的安装文件名，即aDemo.exe
                "copyright": "Copyright © 2019", //版权信息
                "directories": {
                    "output": "./dist" //输出文件路径
                },
                "win": { // windows相关的配置
                    "icon": "./build/icon.ico", //图标，当前图标在根目录下，注意这里有两个坑
                    "target": [{
                        "target": "nsis-web", //利用nsis制作安装程序
                        "arch": [
                            "x64", //64位
                            "ia32" //32位
                        ]
                    }],
                    // "artifactName": "test.",
                    // "publisherName": "qian."
                },
                "mac": {
                    "category": "public.app-category.productivity",
                    // "artifactName": "test."
                },
                "dmg": {
                    "background": "./build/appdmg.png",
                    "icon": "./build/icon.icns",
                    "iconSize": 100,
                    "contents": [{
                            "x": 380,
                            "y": 280,
                            "type": "link",
                            "path": "/Applications"
                        },
                        {
                            "x": 110,
                            "y": 280,
                            "type": "file"
                        }
                    ],
                    "window": {
                        "width": 500,
                        "height": 500
                    }
                },
                "linux": {
                    "category": "Chat;GNOME;GTK;Network;InstantMessaging",
                    "packageCategory": "GNOME;GTK;Network;InstantMessaging",
                    "description": "Zulip Desktop Client for Linux",
                    "target": [
                        "deb",
                        "zip",
                        "AppImage",
                        "snap"
                    ],
                    // "artifactName": "test."
                },
                "nsisWeb": {
                    "oneClick": false, // 是否一键安装
                    "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
                    "allowToChangeInstallationDirectory": true, // 允许修改安装目录
                    // "installerIcon": "./build/icon.ico", // 安装图标
                    // "uninstallerIcon": "./build/icon.ico", //卸载图标
                    // "installerHeaderIcon": "./build/icon.ico", // 安装时头部图标
                    // "createDesktopShortcut": true, // 创建桌面图标
                    // "createStartMenuShortcut": true, // 创建开始菜单图标
                    // "shortcutName": "electron", // 图标名称
                    "perMachine": false
                },
                "publish": {
                    "provider": "github",
                    "repo": "electron-vue-cli3",
                    "owner": "Geninazq",
                    "releaseType": "release"
                }
            }
        }

    }
}