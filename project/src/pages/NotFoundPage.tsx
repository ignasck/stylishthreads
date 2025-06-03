import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-bold text-primary-900">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-primary-900">Page Not Found</h2>
          <p className="mt-2 text-primary-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="mt-8">
          <Link
            to="/"
            className="btn btn-primary inline-flex items-center"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;