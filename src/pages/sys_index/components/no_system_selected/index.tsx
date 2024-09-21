import React from 'react';
import animationData from '@/assets/lotties/home.json'
import Lottie from 'lottie-react';

const NoSystemSelected: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">请选择一个系统</h2>
                <p className="text-gray-600">
                    目前没有选择任何系统。请点击右下角的图标，在系统列表中选择一个系统，以查看相关数据。
                </p>
            </div>
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
};

export default NoSystemSelected;
