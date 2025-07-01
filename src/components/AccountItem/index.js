import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.cdninstagram.com/v/t51.2885-19/475963975_1092422325969894_2358002856747260816_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=_5cFYtdgaI8Q7kNvwEFz00J&_nc_oc=AdnakiZ_bt3ve45--7_HPLRKs3ebOQ1tjxpBMFC3XzLgCkvA9Bh976E3-_jwzUsjOh7-QriTw4QEJP05Hx4Xl155&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AfPsWxUYczQXA3FapC-xeP005NgpY7mq1rKLQDyWMZJSXw&oe=6869514E"
                alt="tran"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Phung Tran</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>aerith_tong</span>
            </div>
        </div>
    );
}

export default AccountItem;
