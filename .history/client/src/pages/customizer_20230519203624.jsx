/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader} from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation } from '../config/motion';


const customizer = () => {
  return (
    <div>customizer</div>
  )
}

export default customizer