<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'Whatdoyoumean8');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'fkJ-rk;i}T[>%!g0T_eaB1H>C-&$R!Uu`h<$, .yK_h2->s}XH^!(5|dJ0$]q90(');
            define('SECURE_AUTH_KEY',  '[MM|YNr`O`2#<L?K^B}H(WOy/B+lXjiTjX%_M*e+rb8h|Ga#_~DSP)|D@zxcOd%B');
            define('LOGGED_IN_KEY',    'SPU#T`puU-t:NJ5s*6le7;iKKsh1b[ MS&^|vQ@,nN8)PK(axCtO@/.`/MHm^r-]');
            define('NONCE_KEY',        'W?gTanXn$H7wJp)yA=B_<lPVvc+e2^:9G39GZ~%XQpFHbI|P-b92n=c*0[%:r u6');
        define('AUTH_SALT',        '/7|P|pbniq}A&|}qHuBLe+Zqkei,L*Pb!.Ns<84VmAGe vvOJE3{39cd2ljNSjXq');
        define('SECURE_AUTH_SALT', 'B7Z9&VBeg2o7v0-xNBjGv-gKK;/55/+WC&k63`~ ;6SMSwf:z|QSOTZtDaQGqPIv');
        define('LOGGED_IN_SALT',   '0rpts?Q.WC$&o^#gD%mAyUWj.7+y:nU-Vin+|E:cse@|d%HE?R Lp0%I`UY/+TN2');
        define('NONCE_SALT',       '%V]hPOtd Q)<enos8DYE+SocNR]rh6R+[3bKgTw4+#6#FUZeYLh1#175 Jt PF /');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'bugsblog_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

