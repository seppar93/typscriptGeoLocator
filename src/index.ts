import { User } from './User'; // << when using just the export and not export default use curly
import {Company} from './Company'
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

const customMap = new CustomMap('map');

customMap.addMarker(user)
customMap.addMarker(company)



