import React from "react";

interface PhotosPageProps {
    params: Promise<{ id: number; photoId: number }>;
}

const PhotosPage = async ({ params }: PhotosPageProps) => {
    const { id, photoId } = await params;
    return (
        <div>
            PhotosPage{id} {photoId}
        </div>
    );
};

export default PhotosPage;
