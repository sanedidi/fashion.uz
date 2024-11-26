import hair1 from '../../../assets/hair1.jpg'
import hair2 from '../../../assets/hair2.jpg'
import hair3 from '../../../assets/hair3.jpg'
import hair4 from '../../../assets/hair4.jpg'
import hair5 from '../../../assets/hair5.jpg'
import hair6 from '../../../assets/hair6.jpg'
import hair7 from '../../../assets/hair7.jpg'
import hair8 from '../../../assets/hair8.jpg'
import hair9 from '../../../assets/hair9.jpg'
import hair10 from '../../../assets/hair10.jpg'
import hair11 from '../../../assets/hair11.jpg'
import hair12 from '../../../assets/hair12.jpg'
import nail1 from '../../../assets/nail1.jpg'
import nail2 from '../../../assets/nail2.jpg'
import nail3 from '../../../assets/nail3.jpg'
import nail4 from '../../../assets/nail4.jpg'
import nail5 from '../../../assets/nail5.jpg'
import nail6 from '../../../assets/nail6.jpg'
import nail7 from '../../../assets/nail7.jpg'
import nail8 from '../../../assets/nail8.jpg'
import nail9 from '../../../assets/nail9.png'
import nail10 from '../../../assets/nail10.jpg'
import nail11 from '../../../assets/nail11.png'
import nail12 from '../../../assets/nail12.jpg'
import makeup1 from '../../../assets/makeup1.jpg'
import makeup2 from '../../../assets/makeup2.png'
import makeup3 from '../../../assets/makeup3.jpg'
import makeup4 from '../../../assets/makeup4.png'
import makeup5 from '../../../assets/makeup5.png'
import makeup6 from '../../../assets/makeup6.jpg'
import makeup7 from '../../../assets/makeup7.jpg'
import makeup8 from '../../../assets/makeup8.jpg'
import makeup9 from '../../../assets/makeup9.png'
import makeup10 from '../../../assets/makeup10.jpg'
import makeup11 from '../../../assets/makeup11.jpg'
import makeup12 from '../../../assets/makeup12.jpg'
import mans from '../../../assets/man.jpg'
import man1 from '../../../assets/man1.jpg'
import man2 from '../../../assets/man2.jpg'
import man3 from '../../../assets/man3.jpg'
import man4 from '../../../assets/man4.jpg'
import man5 from '../../../assets/man5.jpg'
import man6 from '../../../assets/man6.png'
import man7 from '../../../assets/man7.jpg'
import man8 from '../../../assets/man8.jpg'
import man9 from '../../../assets/man9.jpg'
import man10 from '../../../assets/man10.jpg'
import man11 from '../../../assets/man11.jpg'

export const hair = [{ id: 1, photo: hair1 }, { id: 3, photo: hair3 }, { id: 7, photo: hair7 }, { id: 4, photo: hair4 }, { id: 5, photo: hair5 }, { id: 10, photo: hair10 }, { id: 2, photo: hair2 }, { id: 8, photo: hair8 }, { id: 6, photo: hair6 }, { id: 9, photo: hair9 }, { id: 11, photo: hair11 }, { id: 12, photo: hair12 },]
export const nail = [{ id: 1, photo: nail1 }, { id: 3, photo: nail3 }, { id: 7, photo: nail7 }, { id: 4, photo: nail4 }, { id: 5, photo: nail5 }, { id: 10, photo: nail10 }, { id: 2, photo: nail2 }, { id: 8, photo: nail8 }, { id: 6, photo: nail6 }, { id: 9, photo: nail9 }, { id: 11, photo: nail11 }, { id: 12, photo: nail12 },]
export const makeup = [{ id: 11, photo: makeup11 }, { id: 12, photo: makeup12 }, { id: 1, photo: makeup1 }, { id: 9, photo: makeup9 }, { id: 7, photo: makeup7 }, { id: 5, photo: makeup5 }, { id: 8, photo: makeup8 }, { id: 4, photo: makeup4 }, { id: 3, photo: makeup3 }, { id: 10, photo: makeup10 }, { id: 2, photo: makeup2 }, { id: 6, photo: makeup6 },]
export const man = [{ id: 11, photo: man11 }, { id: 12, photo: mans }, { id: 1, photo: man1 }, { id: 9, photo: man9 }, { id: 7, photo: man7 }, { id: 5, photo: man5 }, { id: 8, photo: man8 }, { id: 4, photo: man4 }, { id: 3, photo: man3 }, { id: 10, photo: man10 }, { id: 2, photo: man2 }, { id: 6, photo: man6 },]
export const allCategories = [
    ...hair.map((item) => ({ ...item, category: 'hair' })),
    ...nail.map((item) => ({ ...item, category: 'nail' })),
    ...makeup.map((item) => ({ ...item, category: 'makeup' })),
    ...man.map((item) => ({ ...item, category: 'man' })),
];
