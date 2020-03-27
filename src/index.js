import { HeaderComponent } from './components/header.component'
import { NavigationComponent } from './components/nav.component'
import { CreateComponent } from './components/create.component'
import { FavoriteComponet } from './components/favorite.component'
import { PostComponent } from './components/posts.component'


const header = new HeaderComponent('header')


const navigation = new NavigationComponent('navigation')

const posts = new PostComponent('posts')
const create = new CreateComponent('create')
const favorite = new FavoriteComponet('favorite')
 
navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])