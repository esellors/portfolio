import { imgDir } from '../../assets/img/projects/imgDir';

// project links order: demo, source

export const projectDir = {
    projects: [
        {
            name: 'instaplan',
            context: 'DevMountain Group Project with 2 week time limit. The goal of this project was to make a site full-stack, intuitive, user friendly, and engaging while working on a team.',
            desc: 'A site that allows single click access to the current day’s events.',
            links: [
                {
                    site: 'source',
                    url: 'https://github.com/instaplan/instaplan'
                }
            ],
            imgs: imgDir.projects.instaplan
        },
        {
            name: 'bartertag',
            context: 'DevMountain Personal Project with 2 week time limit. The goal of this project was to make a site full-stack, novel, and complex.',
            desc: 'A new, modern marketplace for bartering.',
            links: [
                {
                    site: 'demo',
                    url: 'https://bartertag.esellors.com'
                },
                {
                    site: 'source',
                    url: 'https://github.com/esellors/bartertag'
                }
            ],
            imgs: imgDir.projects.bartertag
        },
        {
            name: 'foodoo',
            context: 'DevMountain Personal Project with 4 day time limit. The goal of this project was to make a site lightweight, functional, and intuitive without employing a database.',
            desc: 'A one-stop solution for planning out the day\'s meals',
            links: [
                {
                    site: 'demo',
                    url: 'https://foodoo.esellors.com/'
                },
                {
                    site: 'source',
                    url: 'https://github.com/esellors/foodoo'
                }
            ],
            imgs: imgDir.projects.foodoo
        }
    ],
    miniProjects: [
        {
            name: 'Tamagotchi',
            context: 'Created to show a different way of working with Redux. This lesson was prior to students learning React-Redux.',
            desc: 'Keep the virtual pet happy or it will find another home.',
            links: [
                {
                    site: 'source',
                    url: 'https://codesandbox.io/s/dallas-tamagotchi-kojwb'
                }
            ],
            imgs: imgDir.miniProjects.tamagotchi
        },
        {
            name: 'Precisiony',
            context: 'Created as a fun example to show the passing of data in React using props.',
            desc: 'Amass as many points as possible before the time runs out by clicking on target.',
            links: [
                {
                    site: 'source',
                    url: 'https://codesandbox.io/s/precisiony-t3u5r'
                }
            ],
            imgs: imgDir.miniProjects.precisiony
        },
        {
            name: 'Magic Ball',
            context: 'Created to show off working with vanilla JS.',
            desc: 'Think your question and the all-knowing Magic Ball will supply your answer.',
            links: [
                {
                    site: 'source',
                    url: 'https://codesandbox.io/s/magic-ball-volf5'
                }
            ],
            imgs: imgDir.miniProjects.magicBall
        }
    ]
};